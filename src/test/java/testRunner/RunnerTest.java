package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features=".//Features/Login.feature",
glue="stepDefinations",
dryRun=false,
monochrome=true,
tags={"@Sanity,@regression"},
plugin={"pretty","html:test-output"}
		)

public class RunnerTest {

}
