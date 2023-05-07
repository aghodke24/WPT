function countWwwSites(sites) {
    var wwwSites = sites.filter(function(site) {
        return site.startsWith("www");
    });
    return wwwSites.length;
}
var sites = ["www.google.com", "www.msn.com", "www.amazon.co.in", "in.answers.yahoo.com", "en.m.wikipedia.com", "codehs.gitbooks.io", "www.coderanch.com"];
var result = countWwwSites(sites);
alert(result);