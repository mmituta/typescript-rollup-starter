import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const production = !process.env.ROLLUP_WATCH;
export default {
    input: 'src/app.ts',
    output: [
        {
            file: 'dist/main.min.js',
            format: 'iife',
            plugins: [production && terser(), htmlTemplate({
                template: 'src/index.html',
                target: 'dist/index.html',
            })]
        }],
    plugins: [typescript(), !production &&  serve({
        contentBase: ['dist'],
        open: true,
        host: 'localhost',
        port: 10000
      }), livereload()]
};