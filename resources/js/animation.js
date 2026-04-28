export function animate(polygons, svg) {

    const horizontalCenterPadding = 20;
    const verticalCenterPadding = 5;

    const horizontalEdgePadding = 0;
    const verticalEdgePadding = 0;

    const centerX = svg.getBoundingClientRect().width / 2;
    const centerY = svg.getBoundingClientRect().height / 2;
    const w = centerX - horizontalCenterPadding - horizontalEdgePadding;
    const h = centerY - verticalCenterPadding - verticalEdgePadding;

    polygons.forEach(element => {
        const newPoints = `
        ${Math.random() * w + horizontalEdgePadding} ${Math.random() * h + verticalEdgePadding},
        ${Math.random() * w + centerX + horizontalCenterPadding} ${Math.random() * h + verticalEdgePadding},
        ${Math.random() * w + centerX + horizontalCenterPadding} ${Math.random() * h + centerY + verticalCenterPadding},
        ${Math.random() * w + horizontalEdgePadding} ${Math.random() * h + centerY + verticalCenterPadding}
    `;

        element.setAttribute("points", newPoints);
    });

}