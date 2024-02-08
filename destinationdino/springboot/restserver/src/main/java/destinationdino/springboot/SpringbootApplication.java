package destinationdino.springboot;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("destinationdino.springboot")
public class SpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

	/*@Bean
	public CommandLineRunner initData(DestinationRepository destinationRepository) {
		return args -> {
			Destination destination1 = new Destination();
			destination1.setName("Cape Town");
			destinationRepository.save(destination1);

			Destination destination2 = new Destination();
			destination2.setName("Paris");
			destinationRepository.save(destination2);
		};

	} */

} 
