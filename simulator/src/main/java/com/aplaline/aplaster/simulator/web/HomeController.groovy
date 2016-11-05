package com.aplaline.aplaster.simulator.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody

@Controller
@RequestMapping(path = "/")
class ConfigurationController {
    @RequestMapping(method = RequestMethod.GET)
    String index() {
        return 'index'
    }
}
