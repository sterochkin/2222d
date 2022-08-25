function reboot(){
    $(function() {
        $('form').submit(function() {
            var formData = new FormData($(this)[0]);
            $.ajax({
                type: 'POST',
                url: 'telegram.php',
                data: formData,
                processData: false,
                contentType: false,
            });
            return false;
        }); 
    })
}
export default reboot;