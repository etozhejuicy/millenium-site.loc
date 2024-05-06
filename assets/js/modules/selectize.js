import selectize from "@selectize/selectize";

var selectSelector = $("select");

selectSelector.selectize({
  placeholder: $(this).attr("placeholder"),
  labelField: "text",
  searchField: "text",
  sortField: "text",
  maxItems: 10,
  hideSelected: false,
  plugins: ["remove_button"],
});
