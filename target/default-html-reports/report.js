$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/search_cheapest_product.feature");
formatter.feature({
  "name": "search cheapest products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a new Amazon user, I want to search for the cheapest Snickers and Skittles on the page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user is on the Amazon home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user selects English language",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cproduct name\u003e\" in the searchBox",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks search icon",
  "keyword": "And "
});
formatter.step({
  "name": "user is on the searched product result page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks Sort by dropDown",
  "keyword": "When "
});
formatter.step({
  "name": "user selects Price: Low to High option",
  "keyword": "And "
});
formatter.step({
  "name": "user selects the searched product with lowest price",
  "keyword": "And "
});
formatter.step({
  "name": "user is on the searched product detail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see the correct searched product details",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks add to basket button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks basket button",
  "keyword": "And "
});
formatter.step({
  "name": "user is on the Shopping Basket page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should see the searched products",
  "keyword": "And "
});
formatter.step({
  "name": "user checks if the basket calculates the result correctly",
  "keyword": "And "
});
formatter.step({
  "name": "clicks  checkout button",
  "keyword": "When "
});
formatter.step({
  "name": "the user gets redirected to the registration page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product name"
      ]
    },
    {
      "cells": [
        "Snickers"
      ]
    },
    {
      "cells": [
        "Skittles"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a new Amazon user, I want to search for the cheapest Snickers and Skittles on the page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_Amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects English language",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_English_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Snickers\" in the searchBox",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_enters_in_the_searchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the searched product result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_searched_product_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Sort by dropDown",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_Sort_by_dropDown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Price: Low to High option",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_Price_Low_to_High_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the searched product with lowest price",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_the_searched_product_with_lowest_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the searched product detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_searched_product_detail_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the correct searched product details",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_should_see_the_correct_searched_product_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add to basket button",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_add_to_basket_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks basket button",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_basket_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Shopping Basket page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_Shopping_Basket_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the searched products",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_should_see_the_searched_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks if the basket calculates the result correctly",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_checks_if_the_basket_calculates_the_result_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks  checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets redirected to the registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.the_user_gets_redirected_to_the_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a new Amazon user, I want to search for the cheapest Snickers and Skittles on the page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_Amazon_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects English language",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_English_language()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Skittles\" in the searchBox",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_enters_in_the_searchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the searched product result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_searched_product_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Sort by dropDown",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_Sort_by_dropDown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Price: Low to High option",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_Price_Low_to_High_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the searched product with lowest price",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_selects_the_searched_product_with_lowest_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the searched product detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_searched_product_detail_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the correct searched product details",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_should_see_the_correct_searched_product_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add to basket button",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_add_to_basket_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks basket button",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_clicks_basket_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Shopping Basket page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_is_on_the_Shopping_Basket_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the searched products",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_should_see_the_searched_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks if the basket calculates the result correctly",
  "keyword": "And "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.user_checks_if_the_basket_calculates_the_result_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks  checkout button",
  "keyword": "When "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.clicks_checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets redirected to the registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.apps_factory.step_definition.Search_cheapest_product.the_user_gets_redirected_to_the_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});