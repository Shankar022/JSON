# Google's GSON - Java library from Google to convert Java Objects into JSON and vice versa. In addition, it paves room for simpler implementation by not requiring to annotate your classes.

# Oracle’s JSONP is Java API for JSON processing. This consumes/produces streaming JSON text.

# FasterXML’s Jackson - Can handle both JSON/non-JSON encodings. It is a set of data processing tools powered with streaming JSON parser and generator library.

# Trivia
There is a powerful npm package by the name json-rules-engine, which has rules built of simple JSON structures and it is very light-weighted.


# JSON Security Concerns
Cross-Site Request Forgery (CSRF)

It is an exploit which takes advantage of a website trust in any user browser.

Cross-Site Scripting (XSS) attack

A type of injection attack that is injecting data into a web application to facilitate the execution or interpretation of malicious data that takes advantage of any normal website by a third party with a malicious script.


# How to overcome these threats while using JSON
Avoid using Top-level arrays which are valid JavaScript that can be linked to a script tag.

Use HTTP POST instead of HTTP GET in JSON, because the GET request can be linked to any URL with a script tag which is a web threat.

Use JSON.parse() instead of eval(), because eval() function will compile and execute any given set of string, which can open your code during web attacks, where JSON.parse() only parses JSON.