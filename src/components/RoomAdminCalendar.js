import React, { useEffect, useRef } from 'react';

function RoomAdminCalendar() {
    const iframeRef1 = useRef(null);
    const iframeRef2 = useRef(null);

    const setupIframe = (iframe, senderId) => {
        const raMessageReceiver = (event) => {
            if (!event.data.sender || senderId !== event.data.sender) { return; }
            if (event.data.height) { iframe.style.height = (event.data.height + 10) + "px"; }
        };
        window.addEventListener("message", raMessageReceiver, false);

        const setup = () => {
            try {
                iframe.contentWindow.postMessage({
                    location: window.location.toString(),
                    setup: { autoHeight: true, senderName: senderId }
                }, "*");
            } catch (e) { console.error(e); }
        };

        setInterval(setup, 1000);
        iframe.addEventListener("load", setup);

        return () => window.removeEventListener("message", raMessageReceiver);
    }

    useEffect(() => {
        setupIframe(iframeRef1.current, "ra-calendar-single-77857eec8c60dde94390657296121263");
        setupIframe(iframeRef2.current, "ra-calendar-single-d3ac4832bcb7229f47423b9985c25647");
    }, []);

    return (
        <div>
            <h3>Blue Primosten</h3>
            <iframe ref={iframeRef1} id="ra-calendar-single-77857eec8c60dde94390657296121263" style={{width: '100%', height:'540px', border: 'none', padding: '0'}} src="//roomadmin.pl/widget/calendar-single/index?fh=2c022623ea75dff12253f4ec90c35601a48ad795&rid=77601&disableReservationButton=1&n=6&style=%7B%22color_accent%22%3A%22%23A1195B%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D"></iframe>
            <a href="https://roomadmin.pl">zarządzanie noclegami - roomadmin.pl</a>

            <h3>Adriatic Primosten</h3>
            <iframe ref={iframeRef2} id="ra-calendar-single-d3ac4832bcb7229f47423b9985c25647" style={{width: '100%', height:'540px', border: 'none', padding: '0'}} src="//roomadmin.pl/widget/calendar-single/index?fh=2c022623ea75dff12253f4ec90c35601a48ad795&rid=77636&disableReservationButton=1&n=6&style=%7B%22color_accent%22%3A%22%23A1195B%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D"></iframe>
            <a href="https://roomadmin.pl">zarządzanie apartamentami - roomadmin.pl</a>
        </div>
    );
}

export default RoomAdminCalendar;
