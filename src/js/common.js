// import "../blocks/someblock/someblock.js";
import "../blocks/callback/callback.js";
import "../blocks/partners/partners.js";
import "../blocks/services/services.js";
import "../blocks/header/header.js";
import "../blocks/select/select.js";
import "../blocks/cost/cost.js";
import "../blocks/grid/grid.js";
import "../blocks/feedback/feedback.js";


/* Polyfills */
(function(e) {
	e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
	e.closest = e.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

(function(e) {
	var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
	!matches ? (e.matches = e.matchesSelector = function matches(selector) {
		var matches = document.querySelectorAll(selector);
		var th = this;
		return Array.prototype.some.call(matches, function(e) {
			return e === th;
		});
	}) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);