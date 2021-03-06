﻿describe("when one value is reporting change after initialization", function () {
    var parameters = {
        commandCoordinator: {
        },
        commandValidationService: {
            applyRulesTo: function (command) {
            }
        },
        commandSecurityService: {
            getContextFor: function () {
                return {
                    continueWith: function () { }
                };
            }
        },
        options: {
        }
    }

    var commandType = Bifrost.commands.Command.extend(function () {
        this.someValue = ko.observable(43);
        this.someArray = ko.observableArray();
    });

    var newValues = {
        someValue: 43,
        someArray: [1, 2, 3]
    };

    ko.extenders.hasChanges = function (target, options) {
        target.hasChanges = ko.observable(false);
        target.setInitialValue = function () { }
    };

    var command = commandType.create(parameters);
    command.populateFromExternalSource(newValues);

    command.someValue.hasChanges(true);

    it("should have changes", function () {
        expect(command.hasChanges()).toBe(true);
    });
});