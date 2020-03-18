package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {
	
public WebDriver Idriver;
	WaitHelper waithelper;
	public SearchCustomerPage(WebDriver rdriver){
		Idriver= rdriver;
		PageFactory.initElements(rdriver, this);
		waithelper=new WaitHelper(rdriver);
		
	}
	
	@FindBy(how=How.XPATH,using="//input[@id='SearchEmail']")
	WebElement textEmail;
		public boolean EnterEmail(String email){
			waithelper.WaitForElement(textEmail, 30);
			textEmail.clear();
		    textEmail.sendKeys(email);
			//return false;
			return true;
		
	}
	//SearchFirstName. SearchLastName, search-customers
	
	@FindBy(how=How.ID,using="SearchFirstName")
	WebElement textFirstName;
	public void EnterFirstName(String fName){
		waithelper.WaitForElement(textFirstName, 30);
		textFirstName.clear();
	
		textFirstName.sendKeys(fName);
		}
	
	@FindBy(how=How.ID,using="SearchLastName")
	WebElement textLastName;
	public void EnterLastName(String lName){
		
		waithelper.WaitForElement(textLastName, 30);
		textLastName.clear();
		textLastName.sendKeys(lName);
		}
	
	
	@FindBy(how=How.ID,using="search-customers")
	WebElement textSearchCustomer;
	public void ClickSearchBtn(){
		textSearchCustomer.click();
		waithelper.WaitForElement(textSearchCustomer, 30);
		}
	
	@FindBy(how=How.XPATH,using="//table[@id='customers-grid']")
	WebElement table;
	
	
	@FindBy(how=How.XPATH,using="//table[@id='customers-grid']//tbody/tr")
	List<WebElement> tableRows;
	public int getNoOfRows(){
		return tableRows.size();
		
	}
	@FindBy(how=How.XPATH,using="//table[@id='customers-grid']//tbody/tr/td")
	List<WebElement> tableColumns;
	
	public int getNoOfColumns(){
		return tableColumns.size();
		
	}
	
	public boolean searchCustomerByEmail(String email){
		boolean flag=false;
		
		for(int i=1;i<=getNoOfRows();i++){
			
			
			String emailid= table.findElement(By.xpath("//table[@id='customers-grid']//tbody/tr["+i+"]/td[2]")).getText();
			System.out.println(emailid);
			
			if(emailid.equals(email)){
				
				flag=true;
			}
		}
		
		
		
		return flag;
		
		
	}
	
	
	public boolean searchByName(String Name){
		boolean flag=false;
		
		for(int i=1;i<=getNoOfRows();i++){
			
			
			String name= table.findElement(By.xpath("//table[@id='customers-grid']//tbody/tr["+i+"]/td[3]")).getText();
			System.out.println(name);
			String names[]= name.split(" ") ;
			if(names[0].equals("DemoTest")&& names[1].equals("Test")){
				
				flag=true;
			}
		}
		
		
		
		return flag;
		
		
	}
	
}
