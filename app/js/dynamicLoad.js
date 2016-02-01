(function () {
    // region Prototypes
    NodeList.prototype.forEach = Array.prototype.forEach;
    //endregion

    function createCORSRequest(method, url) {
        method = method || 'GET';
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            throw new Error('CROS not supported');
        }
        return xhr;
    }

    function loadLink(link) {
        //remove active from nav a tag
        document.querySelectorAll('nav a').forEach(function (item) {
            if (item.href != link) {
                item.classList.remove('active');
            }
        });

        var xhr = createCORSRequest('GET', link);
        xhr.onload = function () {
            document.querySelector('main').innerHTML = xhr.responseText;
            var content = document.createElement('div');
            content.innerHTML = xhr.responseText;
            content.querySelectorAll('script').forEach(function (item) {
                var script = document.createElement('script');
                script.src = item.src;
                console.log(script);
                document.querySelector('main').appendChild(script);
            });
        };
        xhr.onerror = function () {
            alert(xhr.status + ': ' + xhr.statusText);
        };
        xhr.send();
    }

    document.querySelectorAll('nav a').forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            item.classList.add('active');
            loadLink(item.href);
        }, false);
    });
})();