package stepDefinations;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddCustomer;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass {

	@Before
	public void Setup() throws IOException{
		
		configProp=new Properties();
		
		FileInputStream configPropfile=new FileInputStream("config.properties");
		
		configProp.load(configPropfile);
		
		logger=logger.getLogger("nonComerce");
		PropertyConfigurator.configure("log4j.properties");
		
		String br=configProp.getProperty("browser");
		if(br.equals("chrome")){
	   System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromepath") );
	   driver= new ChromeDriver();
		}
		else if(br.equals("firefox")){
			
			System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxpath") );
			   driver= new FirefoxDriver();
			
		}
		else if(br.equals("ie")){
			
			System.setProperty("webdriver.ie.driver",configProp.getProperty("iepath") );
			   driver= new InternetExplorerDriver();
		}
	   driver.manage().window().maximize();
	   logger.info("**************Browser launch*****************");
		
		
	}
	
	
		
	@Given("User launch the Chrome browser")
	public void User_launch_the_Chrome_browser()
	{
		
	   lp=new LoginPage(driver);
	}

	@When("User opens URL {string}")
	public void User_opens_URL_(String url)
	{
	   driver.get(url);
	   logger.info("*****************URL launched*******************");
	}

	@When("User enter Email as {string} and password as {string}")
	
	public void User_enter_Email_as_and_password_as(String email,String password){
	  //lp = new LoginPage(driver);
		
		logger.info("**********User login to the application successfully!*************");
	  lp.SetUserName(email);
	  lp.SetPassword(password);
		
		
	}

	@When("Click on Login")
	public void Click_on_Login() throws InterruptedException{
		logger.info("User loggin to the application!!");
	   lp.clickLogin(); 
	Thread.sleep(2000);
	}

	@Then("Page title should be {string}")
	public void Page_title_should_be (String title){
	 if(driver.getPageSource().contains("Login was unsuccessful.")){
		 
		 driver.close();
		 Assert.assertTrue(false);}
	 else{
			 
			 Assert.assertEquals(title, driver.getTitle());
		
		 
	 }
	}

	

	//Adding new steps
	
	@Then("User can see the dashboard")
	public void User_can_see_the_dashboard(){
		Addcust = new AddCustomer(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", Addcust.getTitle());
	}
	@When("User clicked on Customers menu")
	public void User_clicked_on_Customers_menu() throws InterruptedException {
		Thread.sleep(3000);
	  Addcust.clickCustomermenu();
	}

	@When("Clicked on the customer Item")
public void Clicked_on_the_customer_Item() throws InterruptedException
	{
		Thread.sleep(3000);
	Addcust.clickCustomerItem();
	}

	@When("Click on Add new button")
	public void Click_on_Add_new_button() throws InterruptedException {
		logger.info("**************!Adding new customer!******************");
		Thread.sleep(3000);
	 Addcust.clickAddNew();
	}
	@Then("User can view add new customer page")
	public void User_can_view_add_new_customer_page()
	{
	   Assert.assertEquals("Add a new customer / nopCommerce administration", Addcust.getTitle());
	}

	@When("User add customer info")
	public void User_add_customer_info() throws InterruptedException{
		logger.info("***************Adding customer data************");
		String email=randomstring()+"@gmail.com";
	  Addcust.EnterEmail(email);
	  Addcust.Enterpassword("Test123");
	  Addcust.EnterFirstName("Demo");
	  Addcust.EnterLastName("Test");
	  Addcust.SelectGender("Female");
	  Addcust.DateofBirth("5/5/1915");
	  Addcust.SetCompanyName("Blue Jeans");
	  Addcust.SetNewsLetter("Your store name");
	  Addcust.customerRole("Administrator");
	 // Addcust.SetManageVendor("Vendor 2");
	  Thread.sleep(2000);
	}

	@When("Clicked on Save button")
	public void Clicked_on_Save_button() throws InterruptedException
	{
	 Addcust.clickSave();
	 Thread.sleep(3000);
	}

	@Then("User can view confirmation message {string}")
	public void User_can_view_confirmation_message(String msgbody)
	 {
	 Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
	}

	//Search user using email id
	@When("User click on customer menu")
	public void User_click_on_customer_menu() throws InterruptedException {
		Thread.sleep(3000);
		  Addcust.clickCustomermenu();
	}

	@When("User click on cutomer item")
	public void User_click_on_cutomer_item() throws InterruptedException{
		Thread.sleep(3000);
		Addcust.clickCustomerItem();
	}

	@When("User enter the customer email id")
	public void User_enter_the_customer_email_id(){
		
		searchcust = new SearchCustomerPage(driver);
		searchcust.EnterEmail("victoria_victoria@nopCommerce.com");
		
	}

	@When("Click on Search button")
	public void Click_on_Search_button() throws InterruptedException
	{
		searchcust.ClickSearchBtn();
		Thread.sleep(3000);
	}
	@Then("User will get the email id in the search table")
	
	public void User_will_get_the_email_id_in_the_search_table(){
		
		boolean status= searchcust.EnterEmail("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
	   
	}


	
	@When("User enter the user FirstName")
	public void User_enter_the_user_FirstName()
	{
		searchcust = new SearchCustomerPage(driver);
		searchcust.EnterFirstName("Victoria");
	}

	@When("User enter the user LastName")
	public void User_enter_the_user_LastName()
	{
		searchcust.EnterLastName("Terces");
	}
	
/*	@When("User enter the user FirstName and LastName")
public void User_enter_the_user_FirstName_and_LastName(String fName, String lName) throws InterruptedException
	{
		searchcust.EnterFirstName(fName);
		Thread.sleep(2000);
		searchcust.EnterLastName(lName);
	}*/
	
	

	@When("Click on search button")
	public void Click_on_search_button() throws InterruptedException
	
	{
		searchcust.ClickSearchBtn();
		Thread.sleep(2000);
	   
	}

	@Then("User will get the Name in search table")
	public void User_will_get_the_Name_in_search_table()
	{
		boolean status= searchcust.searchByName("Demo Test");
		Assert.assertEquals(false, status);
	}

	
	
	@When("User click on logout")
	public void User_click_on_logout() throws InterruptedException {
		Thread.sleep(3000);
	   lp.clickLogout();
	   
	}

	@Then("Close the browser")
	public void Close_the_browser()
	{
	   driver.close();
	}
	
	
	}
