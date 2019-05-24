$('.anonymous-toggle input').on('change', function() {
    var val = $('input[name=anonymous]:checked').val();
    if (val == 1) {
        $('.nonanon').hide();
        $('.nonanon input').prop('disabled', true);
        $('.nonanon input').prop('required', false);
        $('.nonanon-required').removeClass('required');
        $('#method-cib').prop('checked', true);
    } else {
        $('.nonanon').show();
        $('.nonanon input').prop('disabled', false);
        $('.nonanon-required input').prop('required', true);
        $('.nonanon-required').addClass('required');
    }
});

$('.frequency-toggle input').on('change', function() {
    var val = $('input[name=frequency]:checked').val();
    if (val == 'recurring') {
        $('.nonrecurring').hide();
        $('#method-cib').prop('checked', false);
    } else {
        $('.nonrecurring').show();
    }
});

$(document).ready(function() {
    $('.anonymous-toggle input').change();
    $('.frequency-toggle input').change();
});