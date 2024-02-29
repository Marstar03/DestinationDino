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
	public CommandLineRunner initData(DestinationRepository
	destinationRepository, UserRepository userRepository, HasVisitedRepository
	hasVisitedRepository) {
	return args -> {
/* 	Destination destination1 = new Destination("Firenze", "Italy", "https://storbyferie.com/wp-content/uploads/2019/08/storbyferie-til-firenze.jpg", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination1);

	Destination destination2 = new Destination("Brisbane", "Australia", "https://a.cdn-hotels.com/gdcs/production142/d567/dc0dfa64-8abf-469d-97da-439748e43018.jpg", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination2);

	Destination destination3 = new Destination("London", "England", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg", "Cool city for an exchange student.", true, false, false, false);
	destinationRepository.save(destination3);

	Destination destination4 = new Destination("Los Angeles", "USA", "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination4);
	Destination destination5 = new Destination("Paris", "France", "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900", "Cool city for an exchange student.", true, false, false, false);
	destinationRepository.save(destination5);
	Destination destination6 = new Destination("Lisbon", "Portugal", "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/lisbon-GettyImages-1483204178.jpg?imwidth=1280", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination6);
	Destination destination7 = new Destination("Cape Town", "South Africa", "https://media-cdn.tripadvisor.com/media/photo-c/768x250/14/10/2e/1e/cape-town.jpg", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination7);
	Destination destination8 = new Destination("New York", "USA", "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg", "Cool city for an exchange student.", true, false, false, true);
	destinationRepository.save(destination8);
	Destination destination9 = new Destination("Rio de Janeiro", "Brazil", "https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg?impolicy=fcrop&w=800&h=533&q=medium", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination9);
	Destination destination10 = new Destination("Havanna", "Cuba", "https://media.snl.no/media/132193/standard_compressed_iStock-525352138.jpg", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination10);
	Destination destination11 = new Destination("Chicago", "USA", "https://cdn.choosechicago.com/uploads/2022/09/Pink-skyline-with-out-logo.jpeg", "Cool city for an exchange student.", true, true, false, false);
	destinationRepository.save(destination11);
	Destination destination12 = new Destination("Miami", "USA", "https://www.mayflower.com/wp-content/uploads/2022/05/Miami-City-Guide_Header-scaled.jpg", "Cool city for an exchange student.", true, true, false, true);
	destinationRepository.save(destination12); */
	// User user2 = new User("Nina", false);
	// userRepository.save(user2);

	// HasVisited hasVisited1 = new HasVisited(user1, destination1);
	// hasVisitedRepository.save(hasVisited1);

	// HasVisited hasVisited2 = new HasVisited(user2, destination2);
	// hasVisitedRepository.save(hasVisited2);

	};

	}

}
