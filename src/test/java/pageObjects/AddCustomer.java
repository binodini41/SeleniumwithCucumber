package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomer {
	
	
public WebDriver Idriver;
	
	public AddCustomer(WebDriver rdriver){
		Idriver= rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	By Customer_Menu=By.xpath("//a[@href='#']//span[contains(text(),'Customers')]");

	By Customer_item=By.xpath("//span[@class='menu-item-title'][contains(text(),'Customers')]");

	By Add_New=By.xpath("//a[@class='btn bg-blue']");

	By Email=By.xpath("//input[@id='Email']");
	By Password=By.xpath("//input[@id='Password']");

	By FirstName=By.xpath("//input[@id='FirstName']");
	By LastName=By.xpath("//input[@id='LastName']");
	By gendermale=By.xpath("//input[@id='Gender_Male']");
	By genderfemale=By.xpath("//input[@id='Gender_Female']");
	By Gender=By.xpath("//input[@id='Gender_Female']");
	By CompanyName=By.xpath("//input[@id='Company']");
	By dob=By.xpath("//input[@id='DateOfBirth']");
	By Customerrole= By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");

	By ManageVendor =By.xpath("//select[@id='VendorId']");
	By listItemAdministrator = By.xpath("//li[contains(text(),'Administrators')]");
	By listItemForumModerators =By.xpath("//li[contains(text(),'Forum Moderators')]");
	By listItemGuests =By.xpath("//li[contains(text(),'Guests')]");
	By listItemRegistered=By.xpath("//li[contains(text(),'Registered')]");
	By listItemVendors=By.xpath("//li[contains(text(),'Vendors')]");
	By SaveBtn=By.xpath("//button[@name='save']");
	
	public String getTitle(){
		return Idriver.getTitle();
			
	}
	
	public void clickCustomermenu(){
		Idriver.findElement(Customer_Menu).click();
	}
	public void clickCustomerItem(){
		Idriver.findElement(Customer_item).click();
		
	}
	
	public void clickAddNew(){
		Idriver.findElement(Add_New).click();
		
	}
	public void EnterEmail(String email){
		Idriver.findElement(Email).sendKeys(email);
		
	}
	
	public void Enterpassword(String pws){
		Idriver.findElement(Password).sendKeys(pws);
		
	}
	public void EnterFirstName(String fName){
		Idriver.findElement(FirstName).sendKeys(fName);
		
	}
	
	public void EnterLastName(String lName){
		Idriver.findElement(LastName).sendKeys(lName);
		}
	
	
	public void SelectGender(String gender){
		if(gender.equals("Male")){
			Idriver.findElement(gendermale).click();
		}else if(gender.equals("Female")){
			
			Idriver.findElement(genderfemale).click();
		}else{
			
			Idriver.findElement(Gender).click();
		}
		
	}
	public void DateofBirth(String string){
		
		Idriver.findElement(dob).sendKeys(string);
	}
	
	public void SetCompanyName(String cName){
		Idriver.findElement(CompanyName).sendKeys(cName);
		
	}
	
	public void customerRole(String role) throws InterruptedException{
		if(!role.equals("Vendor"))
		{
			
			Idriver.findElement(By.xpath("//*[@id='SelectedCustomerRoleIds-list']//ul[@id='SelectedCustomerRoleIds_listbox']"));
					}
		Idriver.findElement(Customerrole).click();
		WebElement listitem;
		Thread.sleep(5000);
		if(role.equals("Administrator")){
			
			listitem= Idriver.findElement(listItemAdministrator);
		}
		else if(role.equals("Vendor")){
			listitem=Idriver.findElement(ManageVendor);
		}else if(role.equals("Registered")){
			listitem=Idriver.findElement(listItemRegistered);
		}else if(role.equals("Forum Moderators")){
			listitem=Idriver.findElement(listItemForumModerators);
		}else{
			listitem=Idriver.findElement(listItemGuests);
		}
		listitem.click();
		
		/*JavascriptExecutor js=(JavascriptExecutor)Idriver;
		js.executeScript("args[0].click();", listitem);*/
		}
	
	public void SetManageVendor(String value) throws InterruptedException{
		Thread.sleep(1000);
		
		Select dropdown=new Select(Idriver.findElement(ManageVendor));
		dropdown.selectByVisibleText(value);
		
	}
	
	public void clickSave(){
		
		Idriver.findElement(SaveBtn).click();
	}
	
}
