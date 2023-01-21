import React from 'react';

export default function ProTip({
  className,
  heading,
  headingColor,
  description,
  descriptionColor,
  top,
  baseHeadingValue,
  height,
  proTipOnLeft,
}) {
  return (
    <div
      className={
        ` ${proTipOnLeft && 'coverLetterTips_left'} coverLetterTips ` +
        className
      }
      style={{
        top: `${(baseHeadingValue ? baseHeadingValue : 17) + (top && top)}rem`,
      }}
    >
      <div
        style={{ height: height ? height : null }}
        className='coverLetterTips_tip_1'
      >
        <div className='coverLetterTips_section'>
          <div
            style={{
              borderColor: descriptionColor || 'black',
            }}
            className='bracket'
          >
            <div
              style={{ background: descriptionColor || 'black' }}
              className='bracket_line'
            ></div>
          </div>
        </div>
        <div
          className='coverLetterTips_section'
          style={{ color: descriptionColor }}
        >
          <h4 className='proTip_heading' style={{ color: headingColor }}>
            {heading}
          </h4>
          {description}
        </div>
      </div>
    </div>
  );
}
// Perfect Match
// Use the opening statement to show how your current job matches the advertised role.
