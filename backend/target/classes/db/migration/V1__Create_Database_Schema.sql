-- TravelFlow Database Schema
-- MySQL 8.0+ Compatible

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS travelflow_db 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

USE travelflow_db;

-- Create user if not exists
CREATE USER IF NOT EXISTS 'travelflow_user'@'localhost' IDENTIFIED BY 'TravelFlow2024!';
CREATE USER IF NOT EXISTS 'travelflow_user'@'%' IDENTIFIED BY 'TravelFlow2024!';

-- Grant permissions
GRANT ALL PRIVILEGES ON travelflow_db.* TO 'travelflow_user'@'localhost';
GRANT ALL PRIVILEGES ON travelflow_db.* TO 'travelflow_user'@'%';
FLUSH PRIVILEGES;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(120) NOT NULL,
    avatar VARCHAR(255),
    role ENUM('ROLE_USER', 'ROLE_ADMIN') DEFAULT 'ROLE_USER',
    enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_enabled (enabled)
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(500),
    duration VARCHAR(50),
    max_participants INT DEFAULT 10,
    location VARCHAR(200),
    rating DECIMAL(3,2) DEFAULT 0.00,
    reviews_count INT DEFAULT 0,
    features JSON,
    cancellation_policy TEXT,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_type (type),
    INDEX idx_active (active),
    INDEX idx_price (price),
    INDEX idx_rating (rating)
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    service_name VARCHAR(100) NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    status ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED') DEFAULT 'PENDING',
    service_date TIMESTAMP,
    participants INT DEFAULT 1,
    customer_info JSON,
    payment_status ENUM('PENDING', 'PAID', 'REFUNDED', 'FAILED') DEFAULT 'PENDING',
    payment_method VARCHAR(50),
    payment_reference VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_service_type (service_type),
    INDEX idx_service_date (service_date),
    INDEX idx_payment_status (payment_status)
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    booking_id BIGINT,
    service_type VARCHAR(50) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    helpful_votes INT DEFAULT 0,
    verified_purchase BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE SET NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_service_type (service_type),
    INDEX idx_rating (rating),
    INDEX idx_verified (verified_purchase)
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('INFO', 'SUCCESS', 'WARNING', 'ERROR') DEFAULT 'INFO',
    read_at TIMESTAMP NULL,
    action_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_read (read_at),
    INDEX idx_type (type)
);

-- Insert default admin user
INSERT IGNORE INTO users (name, email, password, role, enabled) VALUES 
('Admin User', 'admin@travelflow.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ROLE_ADMIN', TRUE);

-- Insert sample services
INSERT IGNORE INTO services (name, type, description, price, image_url, duration, max_participants, location, rating, reviews_count, features, cancellation_policy, active) VALUES 
('European Adventure', 'travel', 'Experience the best of Europe with our 14-day guided tour through 5 countries including France, Italy, Switzerland, Austria, and Germany.', 3299.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', '14 days', 20, 'Multiple European Cities', 4.9, 127, JSON_ARRAY('Expert Local Guides', 'All Accommodations Included', 'Transportation Provided', 'Skip-the-Line Access'), 'Free cancellation up to 30 days before departure. 50% refund for cancellations 7-30 days before.', TRUE),

('Mountain Bike Adventure', 'bike', 'Thrilling mountain biking experience through scenic trails with professional guides and top-quality equipment.', 89.00, 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', 'Full day', 8, 'Rocky Mountains, Colorado', 4.7, 89, JSON_ARRAY('Professional Guide', 'Premium Bike Rental', 'Safety Equipment', 'Lunch Included'), 'Free cancellation up to 24 hours before the tour.', TRUE),

('Luxury Hotel Suite', 'hotel', 'Experience ultimate luxury in our premium suites with panoramic city views, personalized service, and world-class amenities.', 450.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', 'Per night', 4, 'Downtown Manhattan, NYC', 4.8, 234, JSON_ARRAY('City Views', 'Butler Service', 'Premium Amenities', 'Spa Access'), 'Free cancellation up to 48 hours before check-in.', TRUE),

('Gourmet Dining Experience', 'food', 'Indulge in a multi-course tasting menu crafted by award-winning chefs using the finest seasonal ingredients.', 185.00, 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80', '3 hours', 12, 'Michelin Star Restaurant', 4.9, 156, JSON_ARRAY('7-Course Tasting Menu', 'Wine Pairing', 'Chef Meet & Greet', 'Recipe Cards'), 'Free cancellation up to 72 hours before reservation.', TRUE),

('Premium Spa Package', 'beauty', 'Rejuvenate your mind and body with our comprehensive spa package including massage, facial, and wellness treatments.', 280.00, 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', '6 hours', 1, 'Luxury Spa Resort', 4.8, 198, JSON_ARRAY('Full Body Massage', 'Facial Treatment', 'Manicure & Pedicure', 'Spa Lunch'), 'Free cancellation up to 24 hours before appointment.', TRUE),

('Health Consultation', 'medical', 'Comprehensive health consultation with board-certified physicians including full examination and personalized health plan.', 350.00, 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', '2 hours', 1, 'Medical Center', 4.9, 89, JSON_ARRAY('Complete Physical Exam', 'Lab Tests Included', 'Personalized Health Plan', 'Follow-up Consultation'), 'Free cancellation up to 48 hours before appointment.', TRUE);
