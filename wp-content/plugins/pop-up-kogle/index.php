<?php
/*
* Plugin Name: Pop-Up Kogle
* Plugin URI: https://sarahvedersoe.dk/storyscape/pop-up-konkurrence
* Description: Dette er et pop-up vindue plugin. Pluginet er lavet i HTML5, CSS, JS og PHP
* Version: 0.1.1
* Author: Sarah Vedersøe    
* Author: https://sarahvedersoe.dk/storyscape/pop-up-konkurrence
* License: GPL2
*/

# Skaber et pop-up vindue i plugin form
function popup_form()


{ 
    $content = '';
    $content .= '<body onload="init();" style="margin:0px;">';
    $content .= '<section id="popup">';
    $content .= '<div id="popupbutton">X</div>';
    $content .= '<div id="koglejagtenh"><h1>KOGLEJAGTEN</h1></div>';
    $content .= '<div id="animation_container">';
    $content .= '<div id="animationsigte">';
    $content .= '<canvas id="canvas" width="424" height="510" style="position: absolute; display: block;"></canvas>';
    $content .= '<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:424px; height:510px; position: absolute; left: 0px; top: 0px; display: block;">';
    $content .= '</div>';
    $content .= '</div>';
    $content .= '<div id="p">Vær med i konkurrencen om at vinde en kasse af dine favorit Kogle øl! Tag vanterne på og bevæg dig ud i skoven. Indsaml de flotteste kogler og pynt hjemmet med dem. <br> Se mere om konkurrencen her! </div>';
    $content .= '</section>';
     
     return $content;
}

# Første parameter er et selvvalgt short code og andet er navnet på funktionen der byggede min pop up form
add_shortcode('show_pop_up_kogle','popup_form');



# Brug af action Hook i Wordpress til at udføre wp-enqueue-scripts 
add_action('wp_enqueue_scripts','register_styles_and_scripts_for_pop_up');

function register_styles_and_scripts_for_pop_up()

{
    wp_enqueue_style('UdvalgteFonts1','https://fonts.googleapis.com/css2?family=Anton&display=swap');
    
    wp_enqueue_style('UdvalgteFonts2','https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    wp_enqueue_style('MitCSSdokument', plugins_url('pop-up-kogle/css/style.css'));
   
    wp_deregister_script('jquery');
    
    wp_enqueue_script('JSlibrary1','https://code.createjs.com/1.0.0/createjs.min.js',array(),null,true);
    
    wp_enqueue_script('JSlibraryKogle',plugins_url('pop-up-kogle/koglejagtkonku.js'),array('JSlibrary1'),null,true);
     
    wp_enqueue_script('JSlibraryCustom',plugins_url('pop-up-kogle/js/scriptcustom.js'),array('JSlibraryKogle'),null,true);
    
    wp_enqueue_script('jquery','https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',array(),null,true);
 
    wp_enqueue_script('MitJSdokument', plugins_url('pop-up-kogle/js/script.js'),array('jquery'),null,true);
}
?>