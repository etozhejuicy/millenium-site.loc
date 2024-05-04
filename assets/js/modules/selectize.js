import selectize from "@selectize/selectize";

var selectSelector = $("select");

selectSelector.selectize({
  preload: true,
  persist: false,
  placeholder: selectSelector.attr("placeholder"),
  hideSelected: true,
});
