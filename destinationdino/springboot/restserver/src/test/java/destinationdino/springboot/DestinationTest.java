package destinationdino.springboot;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class DestinationTest {

    private void testSetup(String name, String country, String picture, String info, Destination destination) {
        assertEquals(name, destination.getName());
        assertEquals(country, destination.getCountry());
        assertEquals(picture, destination.getPicture());
        assertEquals(info, destination.getInfo());
    }

    @Test
    @DisplayName("Geters and seters")
    public void getersAndSeters() {

        Destination destination1 = new Destination();
        Destination destination2 = new Destination();
        Destination destination3 = new Destination();
        
        testSetup(null, null, null, null, destination1);
        testSetup(null, null, null, null, destination2);
        testSetup(null, null, null, null, destination3);
        
        destination1.setName("Cape Town");
        destination1.setCountry("South Africa");
        destination1.setPicture("picture1");
        destination1.setInfo("ABC");

        destination2.setName("London");
        destination2.setCountry("UK");
        destination2.setPicture("picture2");
        destination2.setInfo("DEF");

        destination3.setName("Tokyo");
        destination3.setCountry("Japan");
        destination3.setPicture("picture3");
        destination3.setInfo("GHI");

        testSetup("Cape Town", "South Africa", "picture1", "ABC", destination1);
        testSetup("London", "UK", "picture2", "DEF", destination2);  
        testSetup("Tokyo", "Japan", "picture3", "GHI", destination3);

    }
    
    @Test
    @DisplayName("Constructor")
    public void constructors() {

        Destination destination1 = new Destination();
        testSetup(null, null, null, null, destination1);

        Destination destination2 = new Destination("Amsterdam");
        testSetup("Amsterdam", null, null, null, destination2);

        Destination destination3 = new Destination("Berlin", "Germany", "picture", "ABCDEF");
        testSetup("Berlin", "Germany", "picture", "ABCDEF", destination3);
        assertEquals("Berlin", destination3.getName());
        assertEquals("Germany", destination3.getCountry());
        assertEquals("picture", destination3.getPicture());
        assertEquals("ABCDEF", destination3.getInfo());

    }

}
