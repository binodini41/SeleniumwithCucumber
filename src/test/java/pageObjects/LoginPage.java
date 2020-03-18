package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	
public WebDriver Idriver;
	
	
	public LoginPage(WebDriver rdriver){
		
		Idriver= rdriver;
		
		PageFactory.initElements(rdriver, this);
		
	}
	
	
	@FindBy(id="Email")
	@CacheLookup
	WebElement textEmail;
	
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement textPassword;
	
	
	@FindBy(xpath="//input[@value='Log in']")
	@CacheLookup
	WebElement clickLogin;
	
	@FindBy(linkText="Logout")
	@CacheLookup
	WebElement clickLogout;
	
	public void SetUserName(String uName){
		textEmail.clear();
		textEmail.sendKeys(uName);
		
		
	}
	
	public void SetPassword(String pName){
		textPassword.clear();
		textPassword.sendKeys(pName);
		
		
	}
	
	
	public void clickLogin(){
		clickLogin.click();
		
		
	}
	
	public void clickLogout(){
		clickLogout.click();
		
		
	}
	
}
