exports.custom = {
	priority: 100,
	group: "block",
	stylesheets: [
		'../ui/fonts/din.css',
		'../ui/custom.css'
	]
};

exports.custom_page = {
	title: "Containers",
	menu: "custom",
	icon: '<b class="icon">Cont</b>',
	properties: {
		classname: {
			title: 'class name',
			anyOf: [{
				const: "variant-a",
				title: "variant-a"
			}]
		}
	},
	contents: "block+",
	group: 'block',
	html: '<div class="article [classname]"></div>'
};

exports.color.properties.color.anyOf = [{
	const: "black0",
	title: "black0"
}, {
	const: "black5",
	title: "black5"
}, {
	const: "black10",
	title: "black10"
}, {
	const: "black15",
	title: "black15"
}, {
	const: "black20",
	title: "black20"
}, {
	const: "black25",
	title: "black25"
}, {
	const: "black30",
	title: "black30"
}, {
	const: "black40",
	title: "black40"
}, {
	const: "black50",
	title: "black50"
}, {
	const: "black60",
	title: "black60"
}, {
	const: "black70",
	title: "black70"
}, {
	const: "black80",
	title: "black80"
}, {
	const: "black90",
	title: "black90"
}, {
	const: "black100",
	title: "black100"
}];
