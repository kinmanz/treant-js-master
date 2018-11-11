
var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple",
        levelSeparation:    20,
        siblingSeparation:  55,
        subTeeSeparation:   55,
        rootOrientation: "WEST",
        connectors: {
            type: "straight",
            style: {
                "stroke-width": 3,
                "stroke": "#000"
            }
        }
	},
    node: {
        HTMLclass: 'nodeExample1'
    },

	
	nodeStructure: {
		text: { name: "Qualification engine",
            desc: "A basic example",
            data_foo: " data Attribute for node",
			contact: {
				val: "contact me",
					href: "http://twitter.com/",
					target: "_self"
			}
		},
		children: [
			{
				text: { name: "Transfer" },
                children: [
                    {
                        text: { name: "Transfer" }
                    },
                    {
                        text: { name: "Orderer Bank Country" }
                    }
                ]
			},
			{
				text: { name: "Orderer Bank Country" },
                children: [
                    {
                        text: { name: "Transfer" },
                        children: [
                            {
                                text: { name: "Transfer" },
                                children: [
                                    {
                                        text: { name: "Transfer" }
                                    },
                                    {
                                        text: { name: "Orderer Bank Country" },

                                    }
                                ]
                            },
                            {
                                text: { name: "Orderer Bank Country" },
                                children: [
                                    {
                                        text: { name: "Transfer" },
                                        children: [
                                            {
                                                text: { name: "Transfer" },
                                                children: [
                                                    {
                                                        text: { name: "Transfer" },
                                                        children: [
                                                            {
                                                                text: { name: "Transfer" }
                                                            },
                                                            {
                                                                text: { name: "Orderer Bank Country" },

                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text: { name: "Orderer Bank Country" }
                                                    }
                                                ]
                                            },
                                            {
                                                text: { name: "Orderer Bank Country" },

                                            }
                                        ]
                                    },
                                    {
                                        text: { name: "Orderer Bank Country" }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: { name: "Orderer Bank Country" }
                    }
                ]
			}
		]
	}
};


// var simple_chart_config = [
// 	config, parent_node,
// 		first_child, second_child
// ];
