#!/usr/bin/env node
var parser = require('tap-parser'),
    Timeout = require('stream-timeout'),
    spawn = require('child_process').spawn,
    argv = process.argv;

var runner = spawn(argv[2], argv.slice(3));

var p = parser(function(results) {
    runner.kill();
    if (results.ok) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

p.on('extra', function(line) {
    if (line.match(/^Script Error/)) {
        runner.kill();
        process.exit(1);
    }
});

runner.stdout.pipe(Timeout(1000).on('timeout', function() {
    p.end();
}));

runner.stdout.pipe(process.stdout);
runner.stdout.pipe(p);
