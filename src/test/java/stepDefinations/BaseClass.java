package stepDefinations;

import org.openqa.selenium.WebDriver;
import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;

import pageObjects.AddCustomer;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {

	
	public WebDriver driver;
	public LoginPage lp;
	public AddCustomer Addcust;
	public SearchCustomerPage searchcust;
	public static Logger logger;
	public Properties configProp;
	
	public static String randomstring(){
		
		String generatedString1= RandomStringUtils.randomAlphabetic(5);
		return(generatedString1);
	}
}
