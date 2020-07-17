package testrunner;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "Features",
        glue = "stepdefination",
        //dryRun = false,
       //monochrome = true,
        plugin = {"pretty","json:json_output/cucumber.json","junit:junit_output/cucumber.xml"},
        snippets = SnippetType.CAMELCASE
       //strict = true

)
public class FacebookTestRunner {
}
