import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { KolInputDate } from '../component';

describe('kol-input-date has-value class', () => {
	it('removes has-value after reset', async () => {
		const page = await newSpecPage({
			components: [KolInputDate],
			template: () => <kol-input-date _label="Label" _value="2025-01-02" />,
		});

		const formField = page.root?.shadowRoot?.querySelector('.kol-form-field');
		expect(formField?.classList.contains('has-value')).toBe(true);

		await (page.rootInstance as KolInputDate).reset();
		await page.waitForChanges();

		expect(formField?.classList.contains('has-value')).toBe(false);
	});
});
