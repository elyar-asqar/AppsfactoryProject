package com.apps_factory.step_definition;

import com.apps_factory.pages.DashboardPage;
import com.apps_factory.pages.ProductDetailPage;
import com.apps_factory.pages.SearchedProductPage;
import com.apps_factory.pages.ShoppingBasketPage;
import com.apps_factory.utilities.BrowserUtils;
import com.apps_factory.utilities.ConfigurationReader;
import com.apps_factory.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Map;

public class Search_cheapest_product {
    DashboardPage dashboardPage = new DashboardPage();
    SearchedProductPage searchedProductPage = new SearchedProductPage();
    ProductDetailPage productDetailPage=new ProductDetailPage();
    ShoppingBasketPage shoppingBasketPage=new ShoppingBasketPage();
    String global_productName;
    String pageTitleBeforeCheckout;
    Map<String,String> globalSearchedProduct;
@Given("user is on the Amazon home page")
public void user_is_on_the_Amazon_home_page() {
    Driver.get().get(ConfigurationReader.get("base_url"));
    BrowserUtils.waitFor(1);
    dashboardPage.acceptCookies.click();

}
    @Given("user selects English language")
    public void user_selects_English_language() {

    dashboardPage.selectLanguage();

    }
    @When("user enters {string} in the searchBox")
    public void user_enters_in_the_searchBox(String productName) {
    global_productName=productName;
     dashboardPage.searchBox.sendKeys(productName);
    }

    @When("user clicks search icon")
    public void user_clicks_search_icon() {
    dashboardPage.searchIcon.click();
    }

    @Then("user is on the searched product result page")
    public void user_is_on_the_searched_product_result_page() {
       Assert.assertTrue(Driver.get().getTitle().contains(global_productName));
    }

    @When("user clicks Sort by dropDown")
    public void user_clicks_Sort_by_dropDown() {
    searchedProductPage.Sort_by_dropDown.click();
    }

    @When("user selects Price: Low to High option")
    public void user_selects_Price_Low_to_High_option() {
        searchedProductPage.clickOption();
    }

    @When("user selects the searched product with lowest price")
    public void user_selects_the_searched_product_with_lowest_price() {
      globalSearchedProduct=searchedProductPage.lowestPrice(global_productName);
        BrowserUtils.waitFor(2);
    }

    @Then("user is on the searched product detail page")
    public void user_is_on_the_searched_product_detail_page() {
        System.out.println(globalSearchedProduct.get("name"));
        String productName=globalSearchedProduct.get("name");
        Assert.assertTrue(Driver.get().getTitle().toLowerCase().contains(productName.toLowerCase()));

    }

    @Then("user should see the correct searched product details")
    public void user_should_see_the_correct_searched_product_details() {
        BrowserUtils.waitFor(2);
        String ActualPageSubtitle=productDetailPage.pageSubTitle.getText();
        String ExpectedPageSubtitle=globalSearchedProduct.get("name");
       // System.out.println(ExpectedPageSubtitle);
      //  System.out.println(ActualPageSubtitle);
        Assert.assertEquals(ExpectedPageSubtitle,ActualPageSubtitle);
        BrowserUtils.waitFor(2);
        String price=productDetailPage.price.getText();

        String ExpectedPrice="€".concat(globalSearchedProduct.get("price"));
        System.out.println("actuial price : "+ price);
        System.out.println("Expected price : "+ ExpectedPrice);
        Assert.assertEquals(ExpectedPrice,price);

    }

    @When("user clicks add to basket button")
    public void user_clicks_add_to_basket_button() {
       productDetailPage.addToBasketButton.click();
        BrowserUtils.waitFor(2);

    }

    @When("user clicks basket button")
    public void user_clicks_basket_button() {
        shoppingBasketPage.BasketButton.click();
    }

    @Then("user is on the Shopping Basket page")
    public void user_is_on_the_Shopping_Basket_page() {
        String actualPageSubTitle=shoppingBasketPage.subtitle.getText();
        String expectedPageSubTitle="Shopping Basket";
        Assert.assertEquals(expectedPageSubTitle,actualPageSubTitle);

        Assert.assertTrue(Driver.get().getTitle().contains("Basket"));
    }

    @Then("user should see the searched products")
    public void user_should_see_the_searched_products() {
        String productName=globalSearchedProduct.get("name");
        String     Price=globalSearchedProduct.get("price");
        Assert.assertTrue(Driver.get().getPageSource().toLowerCase().contains(productName.toLowerCase()));
        Assert.assertTrue(Driver.get().getPageSource().toLowerCase().contains(Price));
    }

    @Then("user checks if the basket calculates the result correctly")
    public void user_checks_if_the_basket_calculates_the_result_correctly() {
            Assert.assertTrue(shoppingBasketPage.checkTotalPrice());
        }
    @When("clicks  checkout button")
    public void clicks_checkout_button() {
            pageTitleBeforeCheckout = Driver.get().getTitle();
            shoppingBasketPage.checkoutButton.click();
            BrowserUtils.waitFor(2);
        }
    @Then("the user gets redirected to the registration page")
    public void the_user_gets_redirected_to_the_registration_page() {
            String pageTitleAfterCheckout = Driver.get().getTitle();
            Assert.assertNotEquals(pageTitleBeforeCheckout, pageTitleAfterCheckout);
            Assert.assertTrue(Driver.get().getCurrentUrl().toLowerCase().contains("signin"));
        }
}
