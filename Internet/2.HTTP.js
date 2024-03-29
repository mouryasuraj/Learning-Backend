/*

//HTTP(Hypertext Transfer Protocol)

// why HTTP:

1. HTTP is used to communicate two computers
2. To communicate to the computers, they needs some rules to communicate which is known as 'Protocol'
3. At the heart of HTTP is a simple request-response system. The "requesting" computer, also known as the "client", asks another computer for some information. That computer, "the server" sends back a response with the information that was requested.
4. HTTP powers websites
5. URL(Unified Resource Locator) is essentially an address of another computer or server on the internet. Part of the URL specifies how to reach the server and part of it tell the server what information we want.
6. Using URL with HTTP:
    a. The http:// at the beginning of the website URL specifies that http protocol will be used for communication.
    b. Other communication protocols use URLs as well, (hence "Uniform Resource Locator"). That's why, we need to be specific when we're making HTTP requests by prefixing the URL with http://
7. Request and Response:
    1. A "client" is a computer making an HTTP request.
    2. A "server" is a computer responding to an HTTP request.
    3. A computer can be a client, a server, both, or neither. "Client" and "server" are just words we use to describe what computers are doing within a communication system.
    5. Clients send requests and receive responses.
    6. Servers receive requests and send responses.
8. Clients and servers in the context of HTTP
    a. Clients:
        1. Client is exist in frontend
        2. Clients send requests and receive responses.
    b. Server:
        1. Server is exist in backend
        2. Servers receive requests and send responses.


// DNS(Domain Name System):
1. Web Addresses:
    a. DOMAIN NAMES AND IP ADDRESSES:
        1. Each device connected to the internet has a unique IP address. When we browse the internet, the domains we navigate to are all associated with a particular IP address!
        2. For example, this Wikipedia URL points to a page about miniature pigs: https://en.wikipedia.org/wiki/Miniature_pig
        3. The domain portion of the URL is en.wikipedia.org.
        4. en.wikipedia.org converts to a specific IP address, and that IP address tells your computer exactly where to communicate with that Wikipedia page.
    b. DNS is used to map human readable domain name and convert it into IP address
    c. DNS is responsible for looking up the IP address that's associated with domain name
    d. DNS, or the "Domain Name System", is the phonebook of the internet. Humans connect to websites through domain names, like Boot.dev. DNS "resolves" these domain names to find the associated IP addresses so that web clients can load the resources for the specific address.


// URIs(Uniform Resource Identifiers)
1. Two main types of URIs
    a. URLs(Uniform Resource Locator)
    b. URNs(Uniform Resource Name)
2. All URLs are URIs but not all URIs are URLs
    Example:
        function printURLParts(urlString) {
            const urlObj = new URL(urlString)
            console.log('Protocol: ' + urlObj.protocol)
            console.log('Username: ' + urlObj.username)
            console.log('Password: ' + urlObj.password)
            console.log('Hostname: ' + urlObj.hostname)
            console.log('Port: ' + urlObj.port)
            console.log('Pathname: ' + urlObj.pathname)
            console.log('Search: ' + urlObj.search)
            console.log('Hash: ' + urlObj.hash)
        }

        const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
        printURLParts(fantasyQuestURL)
3. There are 8 main parts to a URL, though not all the sections are always present. Each piece plays a specific role in
   helping clients locate the specified resource.

    The 8 sections are:

    sections of a url

    The protocol is required
    Usernames and passwords are optional
    A domain is required
    The default port for a given protocol is used if one is not provided
    The default (/) path is used if one isn't provided
    A query is optional
    A fragment is optional
4. Fot http the default port is 80
4. Fot https the default port is 443

//Protocol
1.It is the first protocol in the URL
2. Its purpose is to define the rules by which the data being communicated is displayed, encoded or formatted
3. There are many protocols of URLs
4. Example:
    http://example.com
    mailto:noreply@fantasyquest.app



//URL Port
1. Port in a URL is a virtual point where network connections are made
2. Port managed by a computer's operating system and are numbered from 0 to 65535

//Headers
1.An HTTP header allows clients and servers to pass additional information with each request or response. Headers are just case-insensitive key-value pairs that pass additional metadata about the request or response.
2.The Headers API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the Request.headers and Response.headers properties.
*/

