package destinationdino.springboot;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "destinations")
public class Destination {

    @Id
    private String name;

    private String country;
    private String picture;
    private String info;
    private boolean isCity;
    private boolean isWarm;
    private boolean isNorway;
    private boolean isCoast;



    public Destination() {
        
    }

    public Destination(String name) {
        setName(name);
    }

    public Destination(String name, String country, String picture, String info) {
        setName(name);
        setCountry(country);
        setPicture(picture);
        setInfo(info);
    }

    public Destination(String name, String country, String picture, String info, boolean isCity, boolean isWarm, boolean isNorway, boolean isCoast) {
        setName(name);
        setCountry(country);
        setPicture(picture);
        setInfo(info);
        setCity(isCity);
        setWarm(isWarm);
        setNorway(isNorway);
        setCoast(isCoast);
    }



    @OneToMany(mappedBy = "destinations", cascade = CascadeType.ALL)
    private transient List<HasVisited> hasVisitedList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public boolean isCity() {
        return isCity;
    }

    public void setCity(boolean isCity) {
        this.isCity = isCity;
    }

    public boolean isWarm() {
        return isWarm;
    }

    public void setWarm(boolean isWarm) {
        this.isWarm = isWarm;
    }

    public boolean isNorway() {
        return isNorway;
    }

    public void setNorway(boolean isNorway) {
        this.isNorway = isNorway;
    }

    public boolean isCoast() {
        return isCoast;
    }

    public void setCoast(boolean isCoast) {
        this.isCoast = isCoast;
    }

    
    
}
