async function safetyChecker(x) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    try {
        await delay(2000);
        let url = x;
        let security_key = "True";
        
        // UPDATE THE TWO PLACEHOLDERS IN THIS LINK TO MATCH YOUR GITHUB:
        const response = await fetch(`https://github.com/Ringo-dev-s/Summit-shop/tree/05fa43a317928520b2158ea171d842132513ad2c/clients`);
        
        let customer_security_key = await response.text();
        customer_security_key = customer_security_key.trim();
        
        if (security_key === customer_security_key) {
            console.log("YES");
        } else {
            document.querySelector('body').innerHTML = '';
        }
    } catch (error) {
        console.error("Request failed:", error);
    }
}
