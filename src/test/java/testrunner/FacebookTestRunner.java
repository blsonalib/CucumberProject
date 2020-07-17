package testrunner;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\HP\\Documents\\CucumberProject\\Features",
        glue = "stepdefination",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty","html:test_output"},
        strict = true

)
public class FacebookTestRunner {
}
