package com.apps_factory.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProductDetailPage extends BasePage{

    @FindBy(css = "#productTitle")
    public WebElement pageSubTitle;

    @FindBy(css = "#priceblock_ourprice")
    public WebElement price;

    @FindBy(css = "#add-to-cart-button")
    public WebElement addToBasketButton;

}
