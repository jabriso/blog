$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("FayMsfylrUzsnFmFjrDYirb87Csc4dbS6Zzfvv6W", "iMMS8lcheI5em13Oc2SEEbpOq01KmFOhez8RT1oC");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});