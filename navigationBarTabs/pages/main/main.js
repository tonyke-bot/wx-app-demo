'use strict';

let options = {};

options.data = {
    selectedTab: 0,
    tabs: [
        { name: 'Tab1' },
        { name: 'Tab2' },
        { name: 'Tab3' },
        { name: 'Tab4' },
    ]
};

options.switchTab = function (event) {
    if (event.target.dataset.tabindex !== this.data.selectedTab) {
        let selectedTabIndex = event.target.dataset.tabindex;
        this.setData({
            selectedTab: selectedTabIndex
        });
    }
};

Page(options);
