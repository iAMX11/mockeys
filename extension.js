const St = imports.gi.St;
const Main = imports.ui.main;
const Util = imports.misc.util;

let button;

function _mocPause() {
  Util.spawn(['mocp', '-G']);
}

function _mocPrev() {
  Util.spawn(['mocp', '-r']);
}

function _mocNext() {
  Util.spawn(['mocp', '-f']);
}

function init() {
    button1 = new St.Button({ style_class: 'panel-button'});
    let icon = new St.Icon({ icon_name: 'media-skip-forward-symbolic-rtl',
                             style_class: 'system-status-icon' });
    button1.set_child(icon);
    button1.connect('button-press-event', _mocPrev);


    button2 = new St.Button({ style_class: 'panel-button'});
    let icon = new St.Icon({ icon_name: 'media-playback-pause-symbolic',
                             style_class: 'system-status-icon' });
    button2.set_child(icon);
    button2.connect('button-press-event', _mocPause);

    button3 = new St.Button({ style_class: 'panel-button'});
    let icon = new St.Icon({ icon_name: 'media-skip-forward-symbolic',
                             style_class: 'system-status-icon' });
    button3.set_child(icon);
    button3.connect('button-press-event', _mocNext);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button3, 2);
    Main.panel._rightBox.insert_child_at_index(button2, 2);
    Main.panel._rightBox.insert_child_at_index(button1, 2);
}

function disable() {
    Main.panel._rightBox.remove_child(button1);
    Main.panel._rightBox.remove_child(button2);
    Main.panel._rightBox.remove_child(button3);
}
