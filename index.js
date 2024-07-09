document.getElementById('year').innerText = new Date().getFullYear();

function calculateLaplace() {
    const functionInput = document.getElementById('functionInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (functionInput === '') {
        resultDiv.innerHTML = '<p>Please enter a function.</p>';
        return;
    }

    let result;
    let steps = [];

    switch (functionInput) {
        case '1':
            result = '1/s';
            steps = [
                'L{1} = ∫<sub>0</sub><sup>∞</sup> e<sup>-st</sup> dt',
                '     = [e<sup>-st</sup> / -s]<sub>0</sub><sup>∞</sup>',
                '     = 1/s'
            ];
            break;
        case 't':
            result = '1/s<sup>2</sup>';
            steps = [
                'L{t} = ∫<sub>0</sub><sup>∞</sup> t e<sup>-st</sup> dt',
                '     = [(-t e<sup>-st</sup> / s) - (e<sup>-st</sup> / s<sup>2</sup>)]<sub>0</sub><sup>∞</sup>',
                '     = 1/s<sup>2</sup>'
            ];
            break;
        case 't^2':
            result = '2/s<sup>3</sup>';
            steps = [
                'L{t<sup>2</sup>} = ∫<sub>0</sub><sup>∞</sup> t<sup>2</sup> e<sup>-st</sup> dt',
                '      = [(-t<sup>2</sup> e<sup>-st</sup> / s) + (2t e<sup>-st</sup> / s<sup>2</sup>) - (2 e<sup>-st</sup> / s<sup>3</sup>)]<sub>0</sub><sup>∞</sup>',
                '      = 2/s<sup>3</sup>'
            ];
            break;
        case 'e^(-t)':
            result = '1/(s+1)';
            steps = [
                'L{e<sup>-t</sup>} = ∫<sub>0</sub><sup>∞</sup> e<sup>-t</sup> e<sup>-st</sup> dt',
                '       = ∫<sub>0</sub><sup>∞</sup> e<sup>-(s+1)t</sup> dt',
                '       = 1/(s+1)'
            ];
            break;
        case 'sin(t)':
            result = '1/(s<sup>2</sup> + 1)';
            steps = [
                'L{sin(t)} = ∫<sub>0</sub><sup>∞</sup> sin(t) e<sup>-st</sup> dt',
                '       = 1/(s<sup>2</sup> + 1)'
            ];
            break;
        case 'cos(t)':
            result = 's/(s<sup>2</sup> + 1)';
            steps = [
                'L{cos(t)} = ∫<sub>0</sub><sup>∞</sup> cos(t) e<sup>-st</sup> dt',
                '       = s/(s<sup>2</sup> + 1)'
            ];
            break;
        case 'e^(-at)':
            result = '1/(s+a)';
            steps = [
                'L{e<sup>-at</sup>} = ∫<sub>0</sub><sup>∞</sup> e<sup>-at</sup> e<sup>-st</sup> dt',
                '       = 1/(s+a)'
            ];
            break;
        case 't e^(-at)':
            result = '1/(s+a)<sup>2</sup>';
            steps = [
                'L{t e<sup>-at</sup>} = ∫<sub>0</sub><sup>∞</sup> t e<sup>-at</sup> e<sup>-st</sup> dt',
                '       = [(-t e<sup>-(s+a)t</sup> / (s+a)) - (-e<sup>-(s+a)t</sup> / (s+a)<sup>2</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = 1/(s+a)<sup>2</sup>'
            ];
            break;
        case 't<sup>2</sup> e^(-at)':
            result = '2/(s+a)<sup>3</sup>';
            steps = [
                'L{t<sup>2</sup> e<sup>-at</sup>} = ∫<sub>0</sub><sup>∞</sup> t<sup>2</sup> e<sup>-at</sup> e<sup>-st</sup> dt',
                '       = [(-t<sup>2</sup> e<sup>-(s+a)t</sup> / (s+a)) + (2t e<sup>-(s+a)t</sup> / (s+a)<sup>2</sup>) - (2 e<sup>-(s+a)t</sup> / (s+a)<sup>3</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = 2/(s+a)<sup>3</sup>'
            ];
            break;
        case 'e^(at)':
            result = '1/(s-a)';
            steps = [
                'L{e<sup>at</sup>} = ∫<sub>0</sub><sup>∞</sup> e<sup>at</sup> e<sup>-st</sup> dt',
                '       = 1/(s-a)'
            ];
            break;
        case 't e^(at)':
            result = '1/(s-a)<sup>2</sup>';
            steps = [
                'L{t e<sup>at</sup>} = ∫<sub>0</sub><sup>∞</sup> t e<sup>at</sup> e<sup>-st</sup> dt',
                '       = [(-t e<sup>(a-s)t</sup> / (s-a)) - (-e<sup>(a-s)t</sup> / (s-a)<sup>2</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = 1/(s-a)<sup>2</sup>'
            ];
            break;
        case 't<sup>2</sup> e^(at)':
            result = '2/(s-a)<sup>3</sup>';
            steps = [
                'L{t<sup>2</sup> e<sup>at</sup>} = ∫<sub>0</sub><sup>∞</sup> t<sup>2</sup> e<sup>at</sup> e<sup>-st</sup> dt',
                '       = [(-t<sup>2</sup> e<sup>(a-s)t</sup> / (s-a)) + (2t e<sup>(a-s)t</sup> / (s-a)<sup>2</sup>) - (2 e<sup>(a-s)t</sup> / (s-a)<sup>3</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = 2/(s-a)<sup>3</sup>'
            ];
            break;
        case 'sin(at)':
            result = 'a/(s<sup>2</sup> + a<sup>2</sup>)';
            steps = [
                'L{sin(at)} = ∫<sub>0</sub><sup>∞</sup> sin(at) e<sup>-st</sup> dt',
                '       = a/(s<sup>2</sup> + a<sup>2</sup>)'
            ];
            break;
        case 'cos(at)':
            result = 's/(s<sup>2</sup> + a<sup>2</sup>)';
            steps = [
                'L{cos(at)} = ∫<sub>0</sub><sup>∞</sup> cos(at) e<sup>-st</sup> dt',
                '       = s/(s<sup>2</sup> + a<sup>2</sup>)'
            ];
            break;
        case 't sin(at)':
            result = '2as/(s<sup>2</sup> + a<sup>2</sup>)<sup>2</sup>';
            steps = [
                'L{t sin(at)} = ∫<sub>0</sub><sup>∞</sup> t sin(at) e<sup>-st</sup> dt',
                '       = [(-t sin(at) e<sup>-st</sup> / s) - (cos(at) e<sup>-st</sup> / s<sup>2</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = 2as/(s<sup>2</sup> + a<sup>2</sup>)<sup>2</sup>'
            ];
            break;

        case 't cos(at)':
            result = '(s<sup>2</sup> - a<sup>2</sup>)/(s<sup>2</sup> + a<sup>2</sup>)<sup>2</sup>';
            steps = [
                'L{t cos(at)} = ∫<sub>0</sub><sup>∞</sup> t cos(at) e<sup>-st</sup> dt',
                '       = [(-t cos(at) e<sup>-st</sup> / s) + (sin(at) e<sup>-st</sup> / s<sup>2</sup>)]<sub>0</sub><sup>∞</sup>',
                '       = (s<sup>2</sup> - a<sup>2</sup>)/(s<sup>2</sup> + a<sup>2</sup>)<sup>2</sup>'
            ];
            break;


























        default:
            result = 'Function not recognized. Try simple functions like 1, t, t^2, e^(-t), sin(t), cos(t).';
            break;
    }

    if (steps.length > 0) {
        resultDiv.innerHTML = `<h3>Steps:</h3>`;
        steps.forEach(step => {
            resultDiv.innerHTML += `<p>${step}</p>`;
        });
    }
    resultDiv.innerHTML += `<h3>Result:</h3><p>Laplace Transform of ${functionInput} is ${result}</p>`;
}
