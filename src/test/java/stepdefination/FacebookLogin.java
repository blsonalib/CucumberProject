package stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FacebookLogin {
    public WebDriver driver;
    @Given("^open the browser$")
    public void open_the_browser()  {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\HP\\Documents\\CucumberProject\\Driver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
    }

    @When("^Enter the given url \"([^\"]*)\"$")
    public void enter_the_given_url(String arg1) {
        driver.get("https://www.facebook.com/");
    }

    @When("^Enter the valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_the_valid_username_and_password(String username,String password)  {
        driver.findElement(By.name("email")).sendKeys(username);
        driver.findElement(By.name("pass")).sendKeys(password);
    }

    @When("^click on login button$")
    public void click_on_login_button()  {
        driver.findElement(By.id("loginbutton")).click();
    }

    @Then("^Facebook login page must be open$")
    public void facebook_login_page_must_be_open() throws Throwable {
        String title =  driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Facebook",title);

    }
}
