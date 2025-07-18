package com.travelflow.service;

import com.travelflow.dto.booking.BookingRequest;
import com.travelflow.dto.booking.BookingResponse;
import com.travelflow.model.Booking;
import com.travelflow.model.User;
import com.travelflow.repository.BookingRepository;
import com.travelflow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    public BookingResponse createBooking(BookingRequest request, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Booking booking = new Booking();
        booking.setServiceName(request.getServiceName());
        booking.setServiceType(request.getServiceType());
        booking.setDescription(request.getDescription());
        booking.setPrice(request.getPrice());
        booking.setServiceDate(request.getServiceDate());
        booking.setUser(user);
        booking.setStatus(Booking.BookingStatus.PENDING);

        booking = bookingRepository.save(booking);
        return convertToResponse(booking);
    }

    public List<BookingResponse> getUserBookings(Long userId, String status) {
        List<Booking> bookings;
        
        if ("all".equals(status)) {
            bookings = bookingRepository.findByUserIdOrderByCreatedAtDesc(userId);
        } else {
            try {
                Booking.BookingStatus bookingStatus = Booking.BookingStatus.valueOf(status.toUpperCase());
                bookings = bookingRepository.findByUserIdAndStatus(userId, bookingStatus);
            } catch (IllegalArgumentException e) {
                bookings = bookingRepository.findByUserIdOrderByCreatedAtDesc(userId);
            }
        }

        return bookings.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public BookingResponse getBookingById(Long id, Long userId) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (!booking.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to booking");
        }

        return convertToResponse(booking);
    }

    public BookingResponse updateBooking(Long id, BookingRequest request, Long userId) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (!booking.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to booking");
        }

        booking.setServiceName(request.getServiceName());
        booking.setServiceType(request.getServiceType());
        booking.setDescription(request.getDescription());
        booking.setPrice(request.getPrice());
        booking.setServiceDate(request.getServiceDate());

        booking = bookingRepository.save(booking);
        return convertToResponse(booking);
    }

    public BookingResponse cancelBooking(Long id, Long userId) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (!booking.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to booking");
        }

        booking.setStatus(Booking.BookingStatus.CANCELLED);
        booking = bookingRepository.save(booking);
        return convertToResponse(booking);
    }

    public void deleteBooking(Long id, Long userId) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (!booking.getUser().getId().equals(userId)) {
            throw new RuntimeException("Unauthorized access to booking");
        }

        bookingRepository.delete(booking);
    }

    public List<BookingResponse> getAllBookings(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return bookingRepository.findAll(pageRequest)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public BookingResponse updateBookingStatus(Long id, String status) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        try {
            Booking.BookingStatus bookingStatus = Booking.BookingStatus.valueOf(status.toUpperCase());
            booking.setStatus(bookingStatus);
            booking = bookingRepository.save(booking);
            return convertToResponse(booking);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid booking status: " + status);
        }
    }

    private BookingResponse convertToResponse(Booking booking) {
        BookingResponse response = new BookingResponse();
        response.setId(booking.getId());
        response.setServiceName(booking.getServiceName());
        response.setServiceType(booking.getServiceType());
        response.setDescription(booking.getDescription());
        response.setPrice(booking.getPrice());
        response.setStatus(booking.getStatus().name());
        response.setServiceDate(booking.getServiceDate());
        response.setCreatedAt(booking.getCreatedAt());
        response.setUpdatedAt(booking.getUpdatedAt());
        response.setUserName(booking.getUser().getName());
        response.setUserEmail(booking.getUser().getEmail());
        return response;
    }
}
