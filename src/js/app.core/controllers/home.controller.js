import $ from 'jquery';
export default function Home (){
    let vm = this,
        animateHeader = function(){
            let screen = $(this), wrapper = $('.container');
            if (screen.scrollTop() > 0 && wrapper.hasClass('scrolled') == false)
                wrapper.addClass('scrolled');
            else if (screen.scrollTop() < 1 && wrapper.hasClass('scrolled'))
                wrapper.removeClass('scrolled');
        };

    $(window).scroll(animateHeader);
}

Home.$inject = [];
