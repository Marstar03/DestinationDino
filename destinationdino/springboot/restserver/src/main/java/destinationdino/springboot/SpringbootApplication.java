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
			Destination destination1 = new Destination("Cape Town", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination1);
			Destination destination2 = new Destination("Oslo", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination2);
			Destination destination3 = new Destination("Stockholm", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination3);
			Destination destination4 = new Destination("Helsinki", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination4);
			Destination destination5 = new Destination("Johannesburg", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination5);
			Destination destination6 = new Destination("Cape Point", "South Africa", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cape_Town_Mountain.jpg/536px-Cape_Town_Mountain.jpg", "Lorem Ipsum"); 
			destinationRepository.save(destination6);

			Destination destination7 = new Destination("Eiffel Tower", "France", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg", "Cool tower");
			destinationRepository.save(destination7);

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
