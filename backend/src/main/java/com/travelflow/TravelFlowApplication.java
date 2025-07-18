package com.travelflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TravelFlowApplication {
    public static void main(String[] args) {
        SpringApplication.run(TravelFlowApplication.class, args);
    }
}
