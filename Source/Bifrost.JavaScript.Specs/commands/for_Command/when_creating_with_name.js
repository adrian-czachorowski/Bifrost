﻿describe("when creating with name", function () {
    var commandAppliedTo = null;
    var parameters = {
        commandCoordinator: {
        },
        commandValidationService: {
            applyRulesTo: function (command) {
                commandAppliedTo = command
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
            name: "something"
        }
    }
    var command = Bifrost.commands.Command.create(parameters);

    it("should set name on the command", function () {
        expect(command.name).toBe("something");
    });
});