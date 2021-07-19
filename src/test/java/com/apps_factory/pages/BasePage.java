package com.apps_factory.pages;

import com.apps_factory.utilities.BrowserUtils;
import com.apps_factory.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "#twotabsearchtextbox")
    public WebElement searchBox;


    @FindBy(css = "#nav-search-submit-button")
    public WebElement searchIcon;

    @FindBy(css = "#user-menu > a")
    public WebElement userName;

    @FindBy(css = "#sp-cc-accept")
    public WebElement acceptCookies;

    @FindBy(xpath = "//span[@class='icp-nav-flag icp-nav-flag-de']")
    public WebElement languageDropDown;

    @FindBy(xpath = "(//*[@class='a-label a-radio-label'])[2]")
    public WebElement englishButton;
    @FindBy(xpath = "//*[@value='en_GB']")
    public WebElement englishRadioButton;

    @FindBy(className = "a-button-input")
    public WebElement saveButton;


    /**
     * switches display language from other languages to english
     */
    public void selectLanguage() {
        languageDropDown.click();
        BrowserUtils.waitFor(2);
       boolean englishSelected=englishRadioButton.isSelected();
        if(englishSelected) {
            saveButton.click();
        }else{
            englishButton.click();
            BrowserUtils.waitFor(1);
            englishSelected=englishRadioButton.isSelected();
            saveButton.click();
            BrowserUtils.waitFor(1);
        }

    }

}
