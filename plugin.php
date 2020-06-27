<?php
/**
 * Plugin Name: Gutenberg Grow Shrink Block
 * Author: WPJohnny
 * Author URI: https://wpjohnny.com/
 * Donate link: https://www.paypal.me/wpjohnny
 * Version: 1.0
 * Description: Circle is growing or shrinking based on entered interval time with entered circle color. Text will be placed in center of the circle with entered text color and font size, and the text is different when circle is growing or shrinking.
 */

// Load assets for wp-admin when editor is active
function gutenberg_grow_shrink_block_admin() {
   wp_enqueue_script(
      'gutenberg-grow-shrink-block-editor',
      plugins_url( 'block.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );
   wp_enqueue_style(
      'gutenberg-grow-shrink-block-editor',
      plugins_url( 'block-admin.css', __FILE__ ),
      array()
   );
   
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_grow_shrink_block_admin' );

// Load assets for frontend
function gutenberg_grow_shrink_block_front() {

   wp_enqueue_style(
      'gutenberg-grow-shrink-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
   wp_enqueue_script ( 'gutenberg-grow-shrink', plugins_url( 'grow-shrink.js', __FILE__ ),array('jquery'), '1.0.0', 'true' );
}
add_action( 'wp_enqueue_scripts', 'gutenberg_grow_shrink_block_front' );