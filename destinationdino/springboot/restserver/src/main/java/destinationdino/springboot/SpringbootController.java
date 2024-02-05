package destinationdino.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

//@RequestMapping(SpringbootController.INFO_SERVICE_PATH)
@RestController
public class SpringbootController {
    
    //public static final String INFO_SERVICE_PATH = "info";

    /*@Autowired
    private SpringbootService springbootService;
    */

    @GetMapping("/")
    public String testGet() {
        return "Hi";
    }


} 
