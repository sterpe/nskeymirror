jest.dontMock('../');

describe('nsKeyMirror', function () {
	it('makes mirror keys with optional namespaces', function () {
		var nsKeyMirror = require('../');
		var keys = nsKeyMirror({
			foo: 0,
			bar: 0,
			baz: 0
		}, "quux");
		expect(keys).toEqual({
			foo: "foo@quux",
			bar: "bar@quux",
			baz: "baz@quux"
		});
	});
	it('makes mirror keys without namespaces', function () {
		var nsKeyMirror = require('../');
		var keys = nsKeyMirror({
			foo: 0,
			bar: 0,
			baz: 0
		});
		expect(keys).toEqual({
			foo: "foo",
			bar: "bar",
			baz: "baz"
		});
	});
	it('rejects non-Objects and Arrays with error', function () {
		var nsKeyMirror = require('../');
		var attempts = [
			1,
			0,
			"string",
			true,
			null,
			undefined,
			[]
		];
		for (var i = 0; i < attempts.length; ++i) {
			expect(function() {
				nsKeyMirror(attempts[i]);
			}).toThrow();
		}
	});
});
