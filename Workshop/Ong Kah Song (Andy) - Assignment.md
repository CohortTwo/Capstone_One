# Java Access Modifiers

#### Public

Class or instance members that are modified with the public access modifiers can be assessed from anywhere: from within and from outside of the package, as well as from within and from outside of the class. 

The heritage of the class requesting the access will not have any effect on the operation. 

However, public variables and methods will still be inaccessible if the class containing or defining them is not accessible to the requester in the first place. For example, a public variable declared in a default access class will not be accessible to a class from a different package despite the fact that it is public.

#### Default (package access)

Default access is when a class or instance member is accessible to only classes that resides in the same package. 

Classes from outside the package will not have access to these members even when they are related by inheritance to the enclosing class of the members. 

#### Private

Private access members are only accessible by the class that defines or declares them. Classes that inherited these members will only have access to them through the methods of the parent classes (from which these members originated from), if they are available. 

Inner classes that resides within the same enclosing class as these members can also have access to them.

#### Protected 
Members specified with the protected access modifier will also have default or package level access restrictions. However, in cases where the requesting class is an offspring of the enclosing class of the member the restriction will not apply.
