var el = wp.element.createElement;

wp.blocks.registerBlockType('gutenberg-grow-shrink/grow-shrink-block', {
	title: 'Grow Shrink',		// Block name visible to user
	icon: 'lightbulb',	// Toolbar icon can be either using WP Dashicons or custom SVG
	category: 'widgets',	// Under which category the block would appear
	attributes: {			// The data this block will be storing
		radius:{ type:'string'},
		min_radius:{ type:'string'},
		fontsize:{ type:'string'},
		text_color:{ type:'string'},
		circle_color:{ type:'string'},
		grow_period:{ type:'string'},
		shrink_period:{ type:'string'},
		grow_text:{ type:'string'},
		shrink_text:{ type:'string'},
	},
	edit: function(props) {
		// How our block renders in the editor in edit mode
		
       
	   function updateRadius( event ) {
	      props.setAttributes( { radius: event.target.value } );
	   }
	   function updateMinRadius( event ) {
	      props.setAttributes( { min_radius: event.target.value } );
	   }
	   function updateFontSize( event ) {
	      props.setAttributes( { fontsize: event.target.value } );
	   }
	   function updateTextColor( event ) {
	      props.setAttributes( { text_color: event.target.value } );
	   }
	   function updateCircleColor( event ) {
	      props.setAttributes( { circle_color: event.target.value } );
	   }
	   
	   function updateGrowPeriod( event ) {
	      props.setAttributes( { grow_period: event.target.value } );
	   }
	   function updateShrinkPeriod( event ) {
	      props.setAttributes( { shrink_period: event.target.value } );
	   }
	   function updateGrowText( event ) {
	      props.setAttributes( { grow_text: event.target.value } );
	   }
	   function updateShrinkText( event ) {
	      props.setAttributes( { shrink_text: event.target.value } );
	   }
	   

	   return el( 'div', 
			{ 
				className: 'grow-shrink grow-shrink-admin'
			}, 
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Max Radius (px)',
					
					style: { width: '40%' }
				},
				'Circle Max Radius (px)'
			),
			el(
				'input', 
				{
					type: 'number', 
					placeholder: 'Enter radius here...',
					value: props.attributes.radius,
					onChange: updateRadius,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Min Radius (px)',
					
					style: { width: '40%' }
				},
				'Circle Min Radius (px)'
			),
			el(
				'input', 
				{
					type: 'number', 
					placeholder: 'Enter Min Radius here...',
					value: props.attributes.min_radius,
					onChange: updateMinRadius,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Color',
					
					style: { width: '40%' }
				},
				'Circle Color'
			),
			el(
				'input', 
				{
					type: 'string', 
					placeholder: 'Enter Circle Color(as ff0000) here...',
					value: props.attributes.circle_color,
					onChange: updateCircleColor,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Text Grow',
					
					style: { width: '40%' }
				},
				'Text Grow'
			),
			el(
				'input', 
				{
					type: 'text', 
					placeholder: 'Enter Grow Text here...',
					value: props.attributes.grow_text,
					onChange: updateGrowText,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Text Shrink',
					
					style: { width: '40%' }
				},
				'Text Shrink'
			),
			el(
				'input', 
				{
					type: 'text', 
					placeholder: 'Enter Shrink Text here...',
					value: props.attributes.shrink_text,
					onChange: updateShrinkText,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Text Color',
					
					style: { width: '40%' }
				},
				'Text Color'
			),
			el(
				'input', 
				{
					type: 'string', 
					placeholder: 'Enter Text Color(#ff0000) here...',
					value: props.attributes.text_color,
					onChange: updateTextColor,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Font Size (px)',
					
					style: { width: '40%' }
				},
				'Font Size (px)'
			),
			el(
				'input', 
				{
					type: 'number', 
					placeholder: 'Enter Font Size here...',
					value: props.attributes.fontsize,
					onChange: updateFontSize,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Grow Animation Time (ms)',
					
					style: { width: '40%' }
				},
				'Grow Animation Time (ms)'
			),
			el(
				'input', 
				{
					type: 'number', 
					placeholder: 'Enter Grow Time here...',
					value: props.attributes.grow_period,
					onChange: updateGrowPeriod,
					style: { width: '60%' }
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Shrink Animation Time (ms)',
					
					style: { width: '40%' }
				},
				'Shrink Animation Time (ms)'
			),
			el(
				'input', 
				{
					type: 'number', 
					placeholder: 'Enter Shrink Time here...',
					value: props.attributes.shrink_period,
					onChange: updateShrinkPeriod,
					style: { width: '60%' }
				}
			)
		);	// End return

	},	// End edit()
	save: function(props) {
		// How our block renders on the frontend
		
		return el( 'div', null, el('div', 
			{ 
				className: 'grow-shrink grow-shrink-front'
			}, 
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Max Radius',
					
					style: { width: '40%' }
				},
				'Circle Max Radius'
			),
			el(
				'input', 
				{
					type:'text',
					className:'radius',
					value: props.attributes.radius
				},
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Min Radius',
					
					style: { width: '40%' }
				},
				'Circle Min Radius'
			),
			el(
				'input', 
				{
					type:'text',
					className:'min_radius',
					value: props.attributes.min_radius
				}
				
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Font Size(px)',
					
					style: { width: '40%' }
				},
				'Font Size(px)'
			),
			el(
				'input', 
				{
					type:'text',
					className:'fontsize',
					value: props.attributes.fontsize
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Text Color',
					
					style: { width: '40%' }
				},
				'Text Color'
			),
			el(
				'input', 
				{
					type:'text',
					className:'text_color',
					value: props.attributes.text_color
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Circle Color',
					
					style: { width: '40%' }
				},
				'Circle Color'
			),
			el(
				'input', 
				{
					type:'text',
					className:'circle_color',
					value: props.attributes.circle_color
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Set Grow Time',
					
					style: { width: '40%' }
				},
				'Set Grow Time'
			),
			el(
				'input', 
				{
					type:'text',
					className:'grow_period',
					value: props.attributes.grow_period
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Set Shrink Time',
					
					style: { width: '40%' }
				},
				'Set Shrink Time'
			),
			el(
				'input', 
				{
					type:'text',
					className:'shrink_period',
					value: props.attributes.shrink_period
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Grow Text',
					
					style: { width: '40%' }
				},
				'Grow Text'
			),
			el(
				'input', 
				{
					type:'text',
					className:'grow_text',
					value: props.attributes.grow_text
				}
			),
			el(
				'label', 
				{
					type: 'text', 
					
					value: 'Shrink Text',
					
					style: { width: '40%' }
				},
				'Shrink Text'
			),
			el(
				'input', 
				{
					type:'text',
					className:'shrink_text',
					value: props.attributes.shrink_text
				}
			)
			
		));	// End return
		
	}	// End save()
});