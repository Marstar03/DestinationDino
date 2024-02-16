package destinationdino.springboot;

import org.springframework.boot.CommandLineRunner;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("destinationdino.springboot")
public class SpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(DestinationRepository destinationRepository, UserRepository userRepository, HasVisitedRepository hasVisitedRepository) {
		return args -> {
			Destination destination1 = new Destination("Cape Town");
			destinationRepository.save(destination1);

			Destination destination2 = new Destination("Paris");
			destinationRepository.save(destination2);

			User user1 = new User("Joe", true);
			userRepository.save(user1);

			User user2 = new User("Nina", false);
			userRepository.save(user2);

			HasVisited hasVisited1 = new HasVisited(user1, destination1);
			hasVisitedRepository.save(hasVisited1);

			HasVisited hasVisited2 = new HasVisited(user2, destination2);
			hasVisitedRepository.save(hasVisited2);

		};

	} 

} 
